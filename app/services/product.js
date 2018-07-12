import { BASEURL } from '../../app-settings';
import Expo from 'expo';

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