import type { DecoratorContext, Model, Enum, Union } from "@typespec/compiler";
import { codecKey } from "./state.js";

export const namespace = "Specodec.Core";

export function $specodec(context: DecoratorContext, target: Model | Enum | Union): void {
  context.program.stateSet(codecKey).add(target);
}
