export const track = (
  event: string,
  data?: Record<string, unknown>
) => {
  console.log("[TRACK]", event, data);
};
