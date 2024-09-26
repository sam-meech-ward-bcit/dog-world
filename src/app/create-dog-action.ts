"use server";

export type CreateDog = {
  name: string,
  breed: string,
  age: string
}

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const createDog = async ({ name, breed, age }: CreateDog) => {
  await wait(3000)

  console.log("making post request!!!!!!!!!!!!!!!!!")

  console.log(name, breed, age);

  if (parseInt(age) > 20) {
    console.error("some errors happened server side")
    return { success: false, error: "no dead dogs allowed" }
  }

  return { success: true }
};