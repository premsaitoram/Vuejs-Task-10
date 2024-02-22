export default defineNuxtRouteMiddleware(() => {
  const pageVisitCount = usePagevisitCount();
  pageVisitCount.value++;
  console.log("working Globally");
});
