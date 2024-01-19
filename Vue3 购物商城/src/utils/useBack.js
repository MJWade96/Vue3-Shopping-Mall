import { useRouter } from 'vue-router'

const router = useRouter()

export function goBack () {
  router.back()
}
