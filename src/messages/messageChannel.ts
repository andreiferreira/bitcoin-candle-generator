
import { config } from 'dotenv'
import { Channel, connect } from 'amqplib'

config()
const createMessageChannel = async (): Promise<Channel> => {
    try {

        const connection = await connect(process.env.AMQP_SERVER)
        const channel = await connection.createChannel()
        await channel.assertQueue(process.env.QUEUE_NAME)

        console.log('Connected to RabbitMQ')

        return channel
        
    } catch (err) {
        console.log('Error while trying to connect to rabbigMQ')
        console.log(err)
    }
}

export {createMessageChannel}