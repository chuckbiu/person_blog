import React, { useEffect, useState } from 'react'
import Layout from "@/components/Layout/Layout";
import s from './index.module.less'

interface Message {
  id?: string
  nickname: string
  content: string
  createdAt?: string
}

const Msg: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([])
  const [nickname, setNickname] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    // 示例数据
    const mockData: Message[] = [
      { nickname: '小明', content: '你好！', createdAt: new Date().toLocaleString() },
      { nickname: '小红', content: '支持一下！', createdAt: new Date().toLocaleString() }
    ]
    setMessages(mockData)
  }

  const handleSubmit = async () => {
    if (!nickname || !content) return alert('请输入昵称和留言内容')
    setLoading(true)
    const newMessage: Message = {
      nickname,
      content,
      createdAt: new Date().toLocaleString()
    }
    setMessages([newMessage, ...messages])
    setNickname('')
    setContent('')
    setLoading(false)
  }


  return (
    <Layout title={'留言板'}>
      <div className={s['message-board']}>
        <div className={s.form}>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="你的昵称"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="请输入留言内容"
          />
          <button disabled={loading} onClick={handleSubmit}>
            {loading ? '发送中...' : '提交留言'}
          </button>
        </div>

        <div className={s.messages}>
          {messages.map((msg, index) => (
            <div className={s['message-item']} key={index}>
              <div className="meta">
                {msg.nickname} · {msg.createdAt}
              </div>
              <div className={s.content}>{msg.content}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Msg;