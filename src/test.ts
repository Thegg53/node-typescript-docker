console.log('here is the test file')

async function fn_name(params: any) {
    let r = 1 + String(params)
    // console.log(r)
    
    // await setTimeout(() => {
    //     console.log('timeout of test')
    // },5000)
    // console.log(" dkjsaf")
    return r
}

export default fn_name