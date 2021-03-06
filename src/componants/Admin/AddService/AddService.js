import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        const Data = new FormData();
        Data.append('image', data.image[0]);
        Data.append("name", data.name);
        Data.append("price", data.price);
        Data.append("description", data.description)
        axios.post('https://arcane-reef-90996.herokuapp.com/addservice', Data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                document.getElementById('inputName').value = "";
                document.getElementById('inputPrice').value = "";
                document.getElementById('inputDescription').value = "";
                document.getElementById('inputGroupFile01').file = "";
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <div className="">
            <h1>Add Service</h1>

            <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Name</label>
                    <input  {...register("name", { required: true })} type="name" class="form-control" id="inputName" />
                </div>
                <div class="col-md-6">
                    <label for="inputPrice" class="form-label">Price</label>
                    <input  {...register("price", { required: true })} type="number" class="form-control" id="inputPrice" />
                </div>
                <div class="col-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <input {...register("description", { required: true })} type="text" class="form-control" id="inputDescription" placeholder="Description" />
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
                    <input {...register("image", { required: true })} type="file" class="form-control" id="inputGroupFile01" />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>

        </div>
    );
};

export default AddService;