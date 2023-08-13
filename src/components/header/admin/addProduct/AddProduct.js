import React, { useState } from "react";
import "./AddProduct.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../../firebase/config";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const status = [
  { id: 1, option: "Rent" },

  { id: 2, option: "Sale" },
];

const initialStage = {
  title: "",
  imageURL: "",
  price: "",
  location: "",
  rooms: "",
  bath: "",
  desc: "",
  area: "",
  status: "",
  refNum: "",
  agentName: "",
  agentNum: "",
};

const AddProduct = () => {
  const [uploadProgress, setSetUploadProgress] = useState(0);
  const [product, setProduct] = useState({
    ...initialStage,
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleimage = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success("Image uploaded successfully");
        });
      }
    );
  };

  const addFlat = (e) => {
    e.preventDefault();
    console.log(product);
    try {
      const docRef = addDoc(collection(db, "flats"), {
        title: product.title,
        imageURL: product.imageURL,
        price: Number(product.price),
        location: product.location,
        rooms: Number(product.rooms),
        bath: Number(product.bath),
        desc: product.desc,
        area: Number(product.area),
        status: product.status,
        refNum: Number(product.refNum),
        agentName: product.agentName,
        agentNum: Number(product.agentNum),
      });
      setProduct({...initialStage})
      toast.success("Product uploaded succesfully");
      navigate('/admin/viewproduct')
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="layout">
      <section className="newprod">
        <h1 style={{margin:'19px 0'}}>Add new product</h1>
        <div className="product-detailed">
          <form className="product-details" onSubmit={addFlat}>
            <div className="each-input">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                // required
                value={product.title}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input image-section">
              <label htmlFor="title">Product Image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                placeholder="Product Image"
                onChange={(e) => handleimage(e)}
              />
              <input
                type="text"
                name="imageURL"
                value={product.imageURL}
                placeholder="Image URL"
                disabled
              />
            </div>
            <div className="each-input">
              <label htmlFor="title">Price:</label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input">
              <label htmlFor="title">Area:</label>
              <input
                type="number"
                name="area"
                placeholder="Area"
                value={product.area}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input">
              <label htmlFor="title">Location:</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={product.location}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input">
              <label htmlFor="title">Reference Number:</label>
              <input
                type="number"
                name="refNum"
                placeholder="Reference Number"
                value={product.refNum}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input">
              <label htmlFor="title">Room:</label>
              <input
                type="number"
                name="rooms"
                placeholder="Room"
                value={product.rooms}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input">
              <label htmlFor="title">Bath:</label>
              <input
                type="number"
                name="bath"
                placeholder="Bath"
                value={product.bath}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input">
              <label htmlFor="title">Agent Name:</label>
              <input
                type="text"
                name="agentName"
                placeholder="Agent Name"
                value={product.AgentName}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input">
              <label htmlFor="title">Agent Number:</label>
              <input
                type="number"
                name="agentNum"
                placeholder="Agent Number"
                value={product.AgentNum}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="each-input">
              <label htmlFor="">Status:</label>
              <select
                name="status"
                value={product.status}
                onChange={(e) => handleInput(e)}
              >
                <option value="" disabled>
                  Choose status
                </option>
                {status.map((item) => {
                  return (
                    <option
                      key={item.id}
                      
                      value={item.option}
                    >
                      {item.option}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="each-input">
              <textarea
                name="desc"
                value={product.desc}
              
                onChange={(e) => handleInput(e)}
                cols="31"
                rows="10"
                placeholder="Flat Description..."
              ></textarea>
            </div>
            <button className="addprod-submit">Save Flat</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
