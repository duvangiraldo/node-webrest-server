
export class UpdateTodoDto {

    private constructor(
        public readonly id: number,
        public readonly text?: string,
        public readonly completed?: Date,
    ){}

    get values(){
        const returnObj: {[key: string]: any} ={};

        if(this.text) returnObj.text = this.text;
        if(this.completed) returnObj.completed = this.completed;

        return returnObj;
    }

    static create(props: {[key: string]: any}): [string?, UpdateTodoDto?]{


        const {id, text, completed} = props;
        let newCompletedAt = completed;

        if(!id || isNaN(Number(id))){
            return ['Id must be a valid number'];
        }
        
        if(completed){

            newCompletedAt = new Date(completed);

            if(newCompletedAt.toString() === 'Invalid Date'){
                return ['Completed must be a valid date', undefined];
            }
        }

        return [undefined, new UpdateTodoDto(id, text, newCompletedAt)];
    }
}