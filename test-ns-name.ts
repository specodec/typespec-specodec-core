import { createProgram, getGlobalNamespaceType } from "@typespec/compiler";

async function test() {
  const program = await createProgram("/tmp/specodec-tests/debug-global.tsp", {
    emit: [],
    imports: ["@specodec/typespec-emitter-core"]
  });
  
  const globalNs = getGlobalNamespaceType(program);
  console.log("globalNs.name:", globalNs.name);
  console.log("globalNs.name length:", globalNs.name?.length);
  console.log("globalNs.name || 'GlobalNamespace':", globalNs.name || "GlobalNamespace");
}

test().catch(console.error);
