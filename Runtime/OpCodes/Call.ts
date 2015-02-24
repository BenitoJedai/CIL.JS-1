﻿module CIL.Runtime.OpCodes
{
    "use strict";

    export class Call extends OpCode
    {
        private method: TypeSystem.TypeMethod;

        number(): number
        {
            return 40;
        }

        argumentCount(): number[]
        {
            return [4];
        }

        execute(): void
        {
            var nextFrame: StackFrame = new StackFrame();
            nextFrame.argPointers.unshift(this.stack[0].values.pop());
            nextFrame.method = this.method;
            nextFrame.this = this.stack[0].values.pop().value;
            if (this.lastOp instanceof Tail)
            {
                this.stack.shift().free(this.memory);
            }
        }

        constructor(memory: MemorySystem.Memory, stack: StackFrame[], method: TypeSystem.TypeMethod)
        {
            super(memory, stack);
            this.method = method;
        }
    }

    OpCode.opCodes[Call.prototype.number()] = <any> Call;
} 