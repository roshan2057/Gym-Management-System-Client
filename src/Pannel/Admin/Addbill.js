function Addbill() {
  return (
    <>
      <div className="w-25 bg-white rounded p-2 m-5 text-center">
        <form>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <label className="m-2">Membership Id</label>
              <label className="m-2">Package</label>
              <label className="m-2">Medium</label>
            </div>
            <div className="d-flex flex-column">
              <input type="number" name="member_id" />
              <select>
                <option>package one</option>
                <option>package two</option>
              </select>
              <input type="text" name="medium" />
            </div>
          </div>
          <div className="d-block w-50">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Addbill;
