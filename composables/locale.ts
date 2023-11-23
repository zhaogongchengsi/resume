export function useIsCn() {
  const url = useRequestURL()
  return computed(() => url.pathname.startsWith('/cn'))
}
