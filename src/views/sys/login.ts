export function useForm() {
  const onSubmit = () => {
    console.log("submit!");
  };
  const onCancel = () => {
    console.log('cancel!');
  }
  return { onSubmit, onCancel };
}
