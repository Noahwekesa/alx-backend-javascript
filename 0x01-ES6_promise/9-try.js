export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction);
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('guardrail was processed');
  }
}
