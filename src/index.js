export async function bootstrap() {
  console.log("bootstrap");
}

export async function mount(props) {
  console.log("mount", props);
}

export async function unmount(props) {
  console.log("unmount", props);
}
