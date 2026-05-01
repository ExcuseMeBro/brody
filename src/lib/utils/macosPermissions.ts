import { commands } from "@/bindings";

export async function checkBrodyAccessibilityPermission(): Promise<boolean> {
  const result = await commands.checkMacosAccessibilityPermission();

  if (result.status === "ok") {
    return result.data;
  }

  throw new Error(result.error);
}

export async function requestBrodyAccessibilityPermission(): Promise<boolean> {
  const result = await commands.requestMacosAccessibilityPermission();

  if (result.status === "ok") {
    return result.data;
  }

  throw new Error(result.error);
}
