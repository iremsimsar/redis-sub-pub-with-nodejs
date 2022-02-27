import redis from 'redis'

const publisher = redis.createClient()

const publishfunc =   async () => {
    const person = {
      id: '123456',
      title: 'Redis sub-pop',
      name: 'İrem Simsar',
    }
    await publisher.connect()
    //persons->channelname
    await publisher.publish('persons', JSON.stringify(person)) 
}

publishfunc()

