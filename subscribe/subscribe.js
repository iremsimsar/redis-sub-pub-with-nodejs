import redis from 'redis'

const subscribe = async () => {

    const client = redis.createClient()
  
    const subscriber = client.duplicate()
  
    await subscriber.connect()
  
    await subscriber.subscribe('persons', message => {
      console.log(message)
    })

}

subscribe()

