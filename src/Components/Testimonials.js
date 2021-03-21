import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Testimonials extends Component {
  state = { numPages: null, pageNumber: 1 };
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <li key={testimonials.user}>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });
    }
    const { pageNumber, numPages } = this.state;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
              <div>
                <nav>
                  <button onClick={this.goToPrevPage}>Prev</button>
                  <button onClick={this.goToNextPage}>Next</button>
                </nav>

                <div style={{ width: 600 }}>
                  <Document
                    file="./eap.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} width={600} />
                  </Document>
                </div>

                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
