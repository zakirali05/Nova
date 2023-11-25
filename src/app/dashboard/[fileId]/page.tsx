
const Chatpage = ({ params }: { params: { fileId: string } }) => {
  return (
    <section>{params.fileId}</section>
  )
}

export default Chatpage