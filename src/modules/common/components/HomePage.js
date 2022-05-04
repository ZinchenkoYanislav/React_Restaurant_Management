import React from "react";
import { Carousel, Container } from "react-bootstrap";

export default function HomePage() {
  return (
    <div>
      {/* <img src="https://cdn.create.vista.com/api/media/medium/3741512/stock-photo-roasted-lamb-chops?token="></img> */}
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.create.vista.com/api/media/medium/3741512/stock-photo-roasted-lamb-chops?token="
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.create.vista.com/api/media/medium/161946164/stock-photo-rose-flower-with-wine-at?token="
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.create.vista.com/api/media/medium/185007274/stock-photo-view-stylish-empty-cafe-arranged?token="
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    </div>
  );
}
