import React from 'react'
import { useRouter } from 'next/router'

interface Props {}

const Page404 = (props: Props) => {
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <div
      style={{
        fontSize: '60px',
        marginTop: '240px',
        width: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '120px',
      }}
    >
      This page is not found
      <button
        onClick={goHome}
        style={{ padding: '10px 50px', borderRadius: '10px', fontSize: '20px' }}
      >
        Go Home
      </button>
    </div>
  )
}

export default Page404
