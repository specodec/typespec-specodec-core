import "../dist/decorators.js";
import "../dist/backcompat.js";

using TypeSpec.Reflection;

namespace Specodec {
  extern dec codec(target: Model | Enum | Union);
}

namespace Specodec.Core {
  extern dec specodec(target: Model | Enum | Union);
}
