import { BASEURL } from '../../app-settings';
import Expo from 'expo';
import axios from 'axios';

const { manifest } = Expo.Constants;
const api = manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(':').shift().concat(':3000')
    : BASEURL

// const url = 'http://'+ api + '/products';
const url = `http://${api}/products`;

export function getProducts(){
    return fetch(url)
        .then(response => response.json())
        .catch(err => { console.log(err) });
}

export function addProduct(product){
    return axios.post(url, product )
                .catch(err => { console.warn(err) });
}