import { Modal } from "@/components/Modal"
import { NewEvent } from "@/firebase/addData"
import { getEvent } from "@/firebase/getData"
import { useFetch } from "@/hooks/useFetch"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Event = () => {
  
  const router = useRouter();
  const { id } = router.query;
  
  const [loading, setLoading] = useState(true)
  const [event, setEvent] = useState<NewEvent>()

  const fetchData = async () => {
    setLoading(true)

    // TODO: fix type error
  // @ts-ignore
    const res = await getEvent(id)

    // TODO: fix type error
  // @ts-ignore
    setEvent(res)
    setLoading(false)
  }

    useEffect(() => {
        fetchData()
    }, [])

  // const {loading, data, error} = useFetch(getEvent(id))

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <Modal title="Edit" />
      <div>Event</div>
      {/* TODO: fix type error */}
      {/* @ts-ignore */}
      <h2>{event.title}</h2>
      {/* <h3>{event.author}</h3> */}
      {/* <h3>{Date(post.publishDate)}</h3> */}
      {/* <p>{post.content}</p> */}
    </div>
  )
}

export default Event;