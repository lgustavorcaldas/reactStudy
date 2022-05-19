export function Schedule() {
    return(
        <div className="schedule_box">
            <div className="schedule">
                <div className="schedule_inputs">
                    <input type="text" name="description" id="input_description" defaultValue="Description" />
                    <div>
                        <input type="date" name="date" id="input_date" />
                        <input type="text" name="local" id="input_local" defaultValue="Local" />
                    </div>
                </div>            
                <div className="schedule_buttons">
                    <input type="button" value="LIMPAR" id="input_clear" />
                    <input type="button" value="ADICIONAR" id="input_add" />
                </div>
            </div>
        </div>
    );
}