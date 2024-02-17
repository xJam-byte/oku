import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "user@gmail.com",
    description: "E-mail of the user",
  })
  email: string;
  @ApiProperty({
    example: "123456",
    description: "Password of the user",
  })
  password: string;
}
