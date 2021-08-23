const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results.data;
};

const forEach = (items, callBack) => {
  for (let i = 0; i < items.length; i++) {
    callBack(items[i]);
  }
};

it("mock callBack", () => {
  const mockCallBack = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallBack);

  expect(mockCallBack.mock.calls.length).toBe(2);

  expect(mockCallBack.mock.calls[1][0]).toBe(1);

  expect(mockCallBack.mock.results[0].value).toBe(42);

  expect(mockCallBack.mock.results[1].value).toBe(43);
});

it("mock return", () => {
  const mock = jest.fn();

  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("hello");

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe("hello");
});

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "pet Martha",
    },
  });

  const results = await fetchData();

  expect(results.todo).toBe("pet Martha");
});
