import Head from "next/head";
import Link from "next/link";
import Form from "../components/Form";
const ScheduleDemoForm = () => {
  return (
    <>
      <Head>
        <title>
          Book a Free Demo for MS Dynamics 365 & Power Platform Apps{" "}
        </title>
        <meta
          name="description"
          content="Embrace the power of Dynamics 365 and Power Platform with a FREE demo. Schedule now and discover how these business apps can transform operations."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/schedule-a-demo/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>Book a FREE Demo Now!</h1>
              <h3 style={{ fontSize: "18px", paddingBottom: "40px" }}>
                Deploy an all-in-one and efficient cloud-based ERP system,{" "}
                <Link href="/products/dynamics-365-business-central/">
                  <a>Microsoft Dynamics 365 Business Central</a>
                </Link>{" "}
                to open new Business Oppurtunites.{" "}
              </h3>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-sed-demp-wraper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8  align-self-center">
              <div className="sedule-form">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleDemoForm;
