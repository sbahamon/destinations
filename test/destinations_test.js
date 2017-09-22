var should    = require("chai").should(),
  expect      = require("chai").expect,
  supertest   = require("supertest"),
  api         = supertest("http://localhost:3000");

describe('GET /destinations', () => {
  it("should return an array of destinations", (done) => {
    api.get("/destinations")
    .set("Accept", "application/json")
    .end((error, response) => {
      expect(response.body).to.be.an('array');
      done();
    });
  });
});

describe('GET /destinations/:id', () => {
  it("it should respond with a single destination `object` with the property `location`", (done) => {
    api.get("/destinations/1")
    .set("Accept", "application/json")
    .end((error,response) => {
      expect(response.body).to.have.property('location');
      expect(response.body).to.be.an('object');
      done();
    });
  });
})

describe('POST /destinations', () => {
  before((done) => {
    api.post("/destinations")
    .set("Accept", "application/json")
    .send({
      "location": "Buson",
    })
    .end(done);
  });

  it("it should create a new destination with the attribute `location` and value is a string {'des'}", (done) => {
    api.get("/destinations")
    .set("Accept", "application/json")
    .end((error,response) => {
      expect(response.body[response.body.length-1]).to.have.property('location');
      expect(response.body[response.body.length-1].location).to.be.a('string');
      done();
    });
  });
})

describe('PUT /destinations', () => {
  before((done) => {
    api.put("/destinations/4")
    .set("Accept", "application/json")
    .send({
      "location": "New Location",
    })
    .end(done);
  });

  it("it should update the location attribute", (done) => {
    api.get("/destinations/4")
    .set("Accept", "application/json")
    .end((error,response) => {
      expect(response.body.location).to.equal('New Location');
      done();
    });
  });
})

describe('DELETE /destinations', () => {
  before((done) => {
    api.delete("/destinations/22")
    .set("Accept", "application/json")
    .end(done);
  });

  it("It should delete a location ", (done) => {
    api.get("/destinations")
    .set("Accept", "application/json")
    .end((error,response) => {
      expect(response.body.length).to.equal(25);
      done();
    });
  });
})
