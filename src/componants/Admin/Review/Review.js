import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
        const reviewData = {
            loggedInUser,
            ...data
        }
        axios.post('https://arcane-reef-90996.herokuapp.com/addReview', reviewData)
            .then(function (response) {
                document.getElementById('inputName').value = "";
                document.getElementById('companyName').value = "";
                document.getElementById('description').value = "";
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>review</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Your name</label>
                    <input defaultValue={loggedInUser.name}  {...register("name", { required: true })} type="text" class="form-control" id="inputName" placeholder="Your name" />
                </div>
                <div class="mb-3">
                    <label for="companyName" class="form-label">Company's name, Designation</label>
                    <input {...register("companyName", { required: true })} type="text" class="form-control" id="companyName" placeholder="Company's name, Designation" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input {...register("description", { required: true })} type="text" class="form-control" id="description" placeholder="Description" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default Review;