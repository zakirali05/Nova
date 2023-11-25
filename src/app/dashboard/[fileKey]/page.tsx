
const Chatpage = ({ params }: { params: { fileKey: string } }) => {
  return (
    <section>{params.fileKey}</section>
  )
}

export default Chatpage