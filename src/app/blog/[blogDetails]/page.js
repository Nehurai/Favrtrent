import React from "react";

function BlogDetails() {
  return (
    <div className="font-poppins mt-6">
      <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto">
        <div>
          <img src="/Images/image 8.png" alt="" />
        </div>
        <div className="my-6">
          <h1 className="text-4xl font-medium">Finibus Bonorum et Malorum</h1>
          <p className="text-lg text-[#606060]">
            <span className="text-customBlue mr-4 font-semibold">
              Written by John doe
            </span>{" "}
            Monday May 20{" "}
          </p>

          <hr className="my-6" />
          <p className="text-[#606060]">
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?" <br /> <br /> 1914 translation by H. Rackham <br />{" "}
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"{" "}
            <br /> <br />
            <span className="text-black font-semibold">
              {" "}
              Section 1.10.33 of "de Finibus Bonorum et Malorum"{" "}
            </span>{" "}
            <br /> <br /> "At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus
            id quod maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." ndis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat."
          </p>
        </div>
        <section className="mt-12">
          <div className="flex-1 mr-0  flex-col flex justify-center">
            <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 sm:pl-5 border-customBlue">
              <h2 className="text-2xl font-semibold font-poppins  text-center lg:text-left">
                Popular Posts
              </h2>
              <p className="text-customBlue text-lg font-semibold">View All</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-8 my-12">
              <div className="shadow-md rounded-md">
                <img
                  src="/Images/image 2.png"
                  alt=""
                  className="object-cover w-full h-48 lg:h-64"
                />
                <div className="py-4 px-4">
                  <h2 className="text-xl lg:text-2xl font-semibold mb-3">
                    Long established
                  </h2>
                  <p className="text-sm lg:text-base text-[#606060] mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that....
                  </p>
                  <section className="flex justify-between text-sm">
                    <span className="text-[#606060]">May 20th 2020</span>
                    <p className="text-customBlue font-semibold">Read More</p>
                  </section>
                </div>
              </div>
              <div className="shadow-md rounded-md">
                <img
                  src="/Images/image 4.png"
                  alt=""
                  className="object-cover w-full h-48 lg:h-64"
                />
                <div className="py-4 px-4">
                  <h2 className="text-xl lg:text-2xl font-semibold mb-3">
                    Long established
                  </h2>
                  <p className="text-sm lg:text-base text-[#606060] mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that....
                  </p>
                  <section className="flex justify-between text-sm">
                    <span className="text-[#606060]">May 20th 2020</span>
                    <p className="text-customBlue font-semibold">Read More</p>
                  </section>
                </div>
              </div>
              <div className="shadow-md rounded-md">
                <img
                  src="/Images/image 5.png"
                  alt=""
                  className="object-cover w-full h-48 lg:h-64"
                />
                <div className="py-4 px-4">
                  <h2 className="text-xl lg:text-2xl font-semibold mb-3">
                    Long established
                  </h2>
                  <p className="text-sm lg:text-base text-[#606060] mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that....
                  </p>
                  <section className="flex justify-between text-sm">
                    <span className="text-[#606060]">May 20th 2020</span>
                    <p className="text-customBlue font-semibold">Read More</p>
                  </section>
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-8 mt-10 mb-2">
              <div className="shadow-md rounded-md">
                <img
                  src="/Images/image 2.png"
                  alt=""
                  className="object-cover "
                />
                <div className="py-4 px-4">
                  <h2 className="text-2xl font-semibold mb-3">
                    Long established
                  </h2>
                  <p className="text-base text-[#606060] mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that....
                  </p>
                  <section className="flex justify-between text-sm">
                    <span className="text-[#606060]">May 20th 2020</span>
                    <p className="text-customBlue font-semibold">Read More</p>
                  </section>
                </div>
              </div>
              <div className="shadow-md rounded-md">
                <img
                  src="/Images/image 4.png"
                  alt=""
                  className="object-cover "
                />
                <div className="py-4 px-4">
                  <h2 className="text-2xl font-semibold mb-3">
                    Long established
                  </h2>
                  <p className="text-base text-[#606060] mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that....
                  </p>
                  <section className="flex justify-between text-sm">
                    <span className="text-[#606060]">May 20th 2020</span>
                    <p className="text-customBlue font-semibold">Read More</p>
                  </section>
                </div>
              </div>
              <div className="shadow-md rounded-md">
                <img
                  src="/Images/image 5.png"
                  alt=""
                  className="object-cover "
                />
                <div className="py-4 px-4">
                  <h2 className="text-2xl font-semibold mb-3">
                    Long established
                  </h2>
                  <p className="text-base text-[#606060] mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that....
                  </p>
                  <section className="flex justify-between text-sm">
                    <span className="text-[#606060]">May 20th 2020</span>
                    <p className="text-customBlue font-semibold">Read More</p>
                  </section>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BlogDetails;
