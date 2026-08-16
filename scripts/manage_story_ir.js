const fs = require("fs");
const path = require("path");
const { isDeepStrictEqual } = require("util");
const { createBundle, bundleToFloors, readBundle, validateProjectReferences, writeBundle } = require("./story_ir");

const root = path.resolve(__dirname, "..");
const p = (...parts) => path.join(root, ...parts);

const characterStories = [
  { slug: "yuedu-ai", source: "月讀愛.txt", floors: ["yuedu_ai_1", "yuedu_ai_2", "yuedu_ai_3", "yuedu_ai_4"] },
  { slug: "dizi", source: "比那名居地子.txt", floors: ["dizi_1", "dizi_2", "dizi_3", "dizi_4"] },
  { slug: "akane", source: "茜.txt", floors: ["akane_1", "akane_2", "akane_3", "akane_4"] },
  { slug: "juju", source: "茱茱.txt", floors: ["juju_1", "juju_2", "juju_3", "juju_4"] },
  { slug: "huangmo", source: "荒漠支線.txt", floors: ["huangmo_1", "huangmo_2"] },
  { slug: "mikage-rinju", source: "御影凛珠.txt", floors: ["mikage_rinju_1", "mikage_rinju_2", "mikage_rinju_3", "mikage_rinju_4"] },
  { slug: "watanuki-sakuya", source: "綿貫咲耶.txt", floors: ["watanuki_sakuya_1", "watanuki_sakuya_2", "watanuki_sakuya_3", "watanuki_sakuya_4"] },
  { slug: "lanxiang", source: "藍湘.txt", floors: ["lanxiang_1", "lanxiang_2", "lanxiang_3", "lanxiang_4"] },
  { slug: "noir", source: "NoiR.txt", floors: ["noir_1", "noir_2", "noir_3", "noir_4"] },
  { slug: "shirou", source: "鍛刀大賽.txt", floors: ["shirou_1", "shirou_2", "shirou_3", "shirou_4"] },
  { slug: "okabe", source: "岡部倫太郎.txt", floors: ["okabe_1", "okabe_2", "okabe_3", "okabe_4"] },
  { slug: "lala", source: "菈菈安瑟姆.txt", floors: ["lala_1", "lala_2", "lala_3", "lala_4"] },
  { slug: "ruka", source: "漆原瑠華.txt", floors: ["ruka_1", "ruka_2", "ruka_3", "ruka_4"] },
];

function floorFile(id) {
  return p("project", "floors", `${id}.js`);
}

function readFloor(id) {
  const text = fs.readFileSync(floorFile(id), "utf8");
  const start = text.indexOf("{");
  if (start < 0) throw new Error(`${id}: cannot locate floor JSON`);
  return JSON.parse(text.slice(start));
}

function renderFloor(floor) {
  return `main.floors.${floor.floorId}=\n${JSON.stringify(floor, null, 4)}\n`;
}

function irFile(story) {
  return p("project", "story-ir", "character", `${story.slug}.json`);
}

function bootstrapCharacters() {
  let created = 0;
  for (const story of characterStories) {
    const output = irFile(story);
    if (fs.existsSync(output)) throw new Error(`Refusing to overwrite checked-in Story IR: ${path.relative(root, output)}`);
    const source = p("project", "story", story.source);
    const floors = story.floors.map(readFloor);
    writeBundle(output, createBundle(root, [source], floors, "character"));
    created += 1;
  }
  console.log(`Created ${created} character Story IR bundles without overwriting existing IR.`);
}

function validateCharacters(emit) {
  let scenes = 0;
  for (const story of characterStories) {
    const bundle = readBundle(root, irFile(story));
    validateProjectReferences(root, bundle);
    const floors = bundleToFloors(bundle);
    const expectedIds = story.floors.join(",");
    if (floors.map((floor) => floor.floorId).join(",") !== expectedIds) {
      throw new Error(`${story.slug}: Story IR scene list does not match the registered character floor list`);
    }
    for (const floor of floors) {
      if (emit) fs.writeFileSync(floorFile(floor.floorId), renderFloor(floor), "utf8");
      else if (!isDeepStrictEqual(readFloor(floor.floorId), floor)) {
        throw new Error(`${floor.floorId}: engine floor is stale; run node scripts/manage_story_ir.js --emit-character`);
      }
      scenes += 1;
    }
  }
  console.log(`${emit ? "Emitted" : "Validated"} ${scenes} character scenes from checked-in Story IR.`);
}

function main() {
  const bootstrap = process.argv.includes("--bootstrap-character");
  const emit = process.argv.includes("--emit-character");
  if (bootstrap && emit) throw new Error("Choose either --bootstrap-character or --emit-character");
  if (bootstrap) bootstrapCharacters();
  else validateCharacters(emit);
}

if (require.main === module) main();

module.exports = { characterStories, floorFile, irFile, readFloor, renderFloor };
