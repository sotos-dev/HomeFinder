import Container from "../../../ui/container"
import Wrapper from "../../../ui/wrapper"
import Card from "../../globalComps/Card"

const Featured = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <h2 className='mt-8 mb-3 text-xl font-medium'>Featured properties</h2>
          <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3'>
            <Card />
            <Card />
            <Card />
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Featured
