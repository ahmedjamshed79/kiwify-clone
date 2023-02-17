import React from "react";
import kiwify_logo from "../../assets/kiwify-green-logo.png";

const Signup = () => {
  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        {/* Logo and label */}
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={kiwify_logo} alt="Kiwify" class="mx-auto h-12 w-auto" />
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Criar nova conta
          </h2>
          <p class="mt-2 text-center text-base leading-5 text-gray-600">
            Ou &nbsp;
            <a
              href="/login"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              entrar na sua conta existente
            </a>
          </p>
        </div>
        {/* Signup Form */}
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* Email */}
            <div>
              <label class="block text-sm font-medium leading-5 mb-1 text-gray-700">
                E-mail
              </label>
              <div>
                <input
                  type="text"
                  autocomplete="off"
                  name="null"
                  class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full"
                />
                <div class="text-red-500 text-xs mt-1">
                  <div> </div>
                </div>
              </div>
              <div>
                <div class="text-xs text-red-500">Esse campo é obrigatório</div>
              </div>
            </div>
            {/* Re-enter email */}
            <div class="mt-6">
              <label class="block text-sm font-medium leading-5 mb-1 text-gray-700">
                Repetir e-mail
              </label>
              <div>
                <input
                  type="email"
                  autocomplete="off"
                  name="null"
                  class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full"
                />
                 <div class="text-red-500 text-xs mt-1">
                  <div> </div>
                </div>
              </div>
            </div>
            <div>
              <div class="text-xs text-red-500">
                Os dois e-mails devem ser iguais.
              </div>{" "}
              <div class="text-xs text-red-500">Esse campo é obrigatório</div>
            </div>
            {/* Password */}
            <div class="mt-6">
              <label class="block text-sm font-medium leading-5 text-gray-700">
                Senha
              </label>
              <div>
                <input
                  type="password"
                  autocomplete="off"
                  name="null"
                  class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full"
                  aria-autocomplete="list"
                />
                <div class="text-red-500 text-xs mt-1">
                  <div>Esse campo é obrigatório</div>
                </div>
              </div>
            </div>
            {/* terms and condition check */}
            <div class="mt-6">
              <label class="relative flex items-start mt-2">
                <div class="flex items-center h-5">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                  ></input>{" "}
                  <div class="ml-2 text-sm leading-5">
                    <span class="font-medium text-gray-700" />
                    Eu li e aceito os
                    <a
                      href="https://kiwify.com.br/termos-de-uso"
                      target="_blank"
                      rel="noreferrer"
                      class="underline"
                    >
                      termos de uso
                    </a>
                    ,
                    <a
                      href="https://kiwify.com.br/licenca-de-uso-software"
                      target="_blank"
                      rel="noreferrer"
                      class="underline"
                    >
                      termos de licença de uso de software
                    </a>
                    ,
                    <a
                      href="https://kiwify.com.br/politica-de-conteudo"
                      target="_blank"
                      rel="noreferrer"
                      class="underline"
                    >

                      política de conteúdo
                    </a>
                    da Kiwify
                  </div>
                </div>
              </label>
            </div>
            {/* Submit button */}
            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Criar conta
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
