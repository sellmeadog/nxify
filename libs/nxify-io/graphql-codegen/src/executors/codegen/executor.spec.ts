import * as codegen from '@graphql-codegen/cli';
import executor from './executor';
import { CodegenExecutorSchema } from './schema';
import { setTimeout } from 'timers/promises';

jest.mock('@graphql-codegen/cli');

describe('Codegen Executor', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('executes codegen cli', async () => {
    const options = {
      config: 'path/to/codgen.ts',
      watch: false,
    };
    const context = new codegen.CodegenContext({ filepath: options.config });

    const contextSpy = jest
      .spyOn(codegen, 'createContext')
      .mockResolvedValue(context);

    const generateSpy = jest.spyOn(codegen, 'generate').mockResolvedValue([]);

    await expect(executor(options as CodegenExecutorSchema)).resolves.toEqual({
      success: true,
      output: [],
    });

    expect(contextSpy).toHaveBeenCalledTimes(1);
    expect(contextSpy).toHaveBeenCalledWith(options);

    expect(generateSpy).toHaveBeenCalledTimes(1);
    expect(generateSpy).toHaveBeenCalledWith(context);
  });

  it('executes codegen cli in watch mode', async () => {
    const options = {
      config: 'path/to/codgen.ts',
      watch: true,
    };

    const context = new codegen.CodegenContext({ filepath: options.config });

    const contextSpy = jest
      .spyOn(codegen, 'createContext')
      .mockResolvedValue(context);

    const generateSpy = jest.spyOn(codegen, 'generate').mockImplementation(
      () =>
        new Promise(() => {
          /* NOOP */
        })
    );

    await expect(
      Promise.race([
        executor(options as CodegenExecutorSchema),
        setTimeout(1000),
      ])
    ).resolves.toEqual(undefined);

    expect(contextSpy).toHaveBeenCalledTimes(1);
    expect(contextSpy).toHaveBeenCalledWith(options);

    expect(generateSpy).toHaveBeenCalledTimes(1);
    expect(generateSpy).toHaveBeenCalledWith(context);
  });
});
