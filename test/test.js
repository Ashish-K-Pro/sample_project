
const { describe, it } = require('mocha');

const server = require('../server');

let chai, chaiHttp, expect;



describe('API Tests', () => {
    before(async () => {
        chai = await import('chai');
        chaiHttp = await import('chai-http');
        chai.use(chaiHttp.default);
        expect = chai.expect;
    });

});

// testing at route /task for the objects to be added

describe('Our task collection tests', ()=>{

    it('test default api route',(done)=>{
        chai.request(server)
        .get('/task')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('array');

            done();
        })
    })
   
});



// const chai = require('chai');
// const chaiHttp = require('chai-http');

// chai.use(chaiHttp);


// var assert = chai.assert;
// var should = chai.should();
// var expect = chai.expect;

// let chaiHTTP = require('chai-http');
// const { response } = require('express');

// chai.use(chaiHTTP)

