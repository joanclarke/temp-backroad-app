import Title from './Title'
import { tours } from '../data'
import Tour from './Tour'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />
      })}
      <div></div>
    </section>
  )
}

export default Tours
