import axiosInstance from "../api/axios";

/* 헤더가 발생할 때마다 기본으로 key, value 받아옴 */
function setHeader(key: string, value: string) {
    axiosInstance.defaults.headers.common[key] = value;
}

/* 헤더 삭제 */
function removeHeader(key:string) {
    if (!axiosInstance.defaults.headers.common[key]) {
        return;
    }

    delete axiosInstance.defaults.headers.common[key];
}

export {setHeader,removeHeader}