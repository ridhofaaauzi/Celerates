import React from "react";
import bgHeroes from "./bg-heroes.jpg";
import "./serviceNew.style.css";

const ServiceNew = () => {
  return (
    <>
      <section className="px-4 mt-5">
        <div className="container">
          <div className="row">
            <h1 className="text-center fw-bold mb-5">Our Service</h1>
            <div className="d-flex flex-column">
              <div className="col-12 mb-5">
                <div className="d-flex justify-content-center align-items-center gap-5 heroes">
                  <img src={bgHeroes} className="w-100 rounded img-heroes" />
                  <div>
                    <p className="heroes-description">
                      Spa is a treatment that uses water as a means of treatment
                      and skin care is the treatment of the largest organs in
                      the body with massage. Spa treatments combine massage,
                      aromatherapy, bathing in warm water and a comfortable
                      atmosphere, able to make the body and mind feel relaxed
                      and calm. This effect is thought to be due to the benefits
                      of spa which can stimulate the production of endorphin
                      hormones in the body. Apart from making the body feel
                      relaxed, massage can also reduce back pain, pain due to
                      osteoarthritis and side effects of cancer treatment, as
                      well as headaches.
                    </p>
                  </div>
                </div>
              </div>
              <div className="heroes-description-footer mb-5">
                <div>
                  <span className="fw-bold">SPA Treatment - 50 min</span>
                  <p className="fw-bold">$50</p>
                </div>
                <p>
                  Steam, Mud application or Salt scrub with anti-cellulite oil,
                  Body wrapping, Sauna, and Anti-cellulite massage with cream or
                  oil.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="col-12 mb-5">
                <div className="d-flex justify-content-center align-items-center gap-5 heroes">
                  <img src={bgHeroes} className="w-100 rounded img-heroes" />
                  <div>
                    <p className="heroes-description">
                      The goal is to maintain healthy hair condition by offering
                      benefits such as conditioning, softening, smoothing, and
                      strengthening the roots and shaft of the hair. Apart from
                      that, hair care is also used to protect hair from damage
                      due to environmental factors, such as sun exposure and
                      pollution.
                    </p>
                    <ul>
                      <li>Reduces dandruff problems</li>
                      <li>Balances sebum production</li>
                      <li>Maintains hair and scalp moisture</li>
                      <li>Rejuvenates and restores hair condition</li>
                      <li>Avoids clogging of scalp pores</li>
                      <li>Improves scalp blood circulation</li>
                      <li>Reduces hair loss and nourishes hair</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="heroes-description-footer mb-5">
                <div>
                  <span className="fw-bold">Hair Treatment</span>
                  <p className="fw-bold">$50 - $650</p>
                </div>
                <p>
                  Choose from styling, coloring, and healthy natural hair
                  treatments.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="col-12 mb-5">
                <div className="d-flex justify-content-center align-items-center gap-5 heroes">
                  <img src={bgHeroes} className="w-100 rounded img-heroes" />
                  <div>
                    <p className="heroes-description">
                      Elegant nail art is the art of beautifying yourself
                      through the medium of paint on your nails. Apart from
                      having a decorative function, there are several other
                      benefits of this art, one of which is increasing
                      self-confidence. Nail art can also be applied to various
                      nail shapes, both long and short. With different
                      techniques and styles, it produces several benefits for
                      its users.
                    </p>
                    <ul>
                      <li>
                        Gives a beautiful impression and defines someone's
                        personal style
                      </li>
                      <li>Provides creative space for expression</li>
                      <li>Increase your sense of self-confidence</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="heroes-description-footer mb-5">
                <div>
                  <span className="fw-bold">Nails</span>
                  <p className="fw-bold">$150 - $450</p>
                </div>
                <p>Choose the design you want, to beautify your nails</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceNew;
