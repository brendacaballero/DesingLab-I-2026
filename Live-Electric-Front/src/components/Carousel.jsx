
import moto1 from '../assets/moto1.jpg'
import moto2 from '../assets/moto2.jpg'
import moto3 from '../assets/moto3.jpg'
import moto4 from '../assets/moto4.jpg'
import moto5 from '../assets/moto5.jpg'
import moto6 from '../assets/moto6.jpg'
import moto7 from '../assets/moto7.jpg'
import moto8 from '../assets/moto8.jpg'

export function Carousel() {
  return (
    <>
      <div className="col-lg-7">

        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">

            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active">
            </button>

            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1">
            </button>

            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2">
            </button>

            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3">
            </button>

            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4">
            </button>

            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="5">
            </button>

            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="6">
            </button>

          </div>

          <div className="carousel-inner">

            <div className="carousel-item active">

              <img src={moto1} className="d-block w-100 carousel-img" alt="Moto 1" />

            </div>

            <div className="carousel-item">

              <img src={moto2} className="d-block w-100 carousel-img" alt="Moto 2" />

            </div>

            <div className="carousel-item">

              <img src={moto3} className="d-block w-100 carousel-img" alt="Moto 3" />

            </div>

            <div className="carousel-item">

              <img src={moto4} className="d-block w-100 carousel-img" alt="Moto 4" />

            </div>

            <div className="carousel-item">

              <img src={moto5} className="d-block w-100 carousel-img" alt="Moto 5" />

            </div>

            <div className="carousel-item">

              <img src={moto6} className="d-block w-100 carousel-img" alt="Moto 6" />

            </div>

            <div className="carousel-item">

              <img src={moto7} className="d-block w-100 carousel-img" alt="Moto 7" />

            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel"
            data-bs-slide="prev">

            <span className="carousel-control-prev-icon"></span>

          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel"
            data-bs-slide="next">

            <span className="carousel-control-next-icon"></span>

          </button>

        </div>

      </div>
    </>
  )
}