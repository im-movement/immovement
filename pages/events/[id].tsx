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

    const res = await getEvent(id)

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
      <div>Event</div>
      <h2>{event.title}</h2>
      {/* <h3>{event.author}</h3> */}
      {/* <h3>{Date(post.publishDate)}</h3> */}
      {/* <p>{post.content}</p> */}
    </div>
  )
}

export default Event;