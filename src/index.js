// 注意 single-spa 中需要加载 async 函数
export async function bootstrap() {
  console.log("bootstrap");
}

export async function mount() {
  console.log("mount");
}

export async function unmount() {
  console.log("unmount");
}

export async function update() {
  console.log("update");
}