import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepositoryt = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepositoryt, mailTrapMailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };