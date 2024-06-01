export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const response = mathFunction();
    queue.push(response);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
