type ModelConfig = {
  name?: string;
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  inputTokenCost: number;
  outputTokenCost: number;
  isTemplate: boolean;
};

type ProviderConfigs = {
  [key: string]: ModelConfig | null;
};

export type ModelConfigurations = {
  [key: string]: ProviderConfigs;
};

export const getModelConfigurations = (): ModelConfigurations => ({
  openai: {
    "gpt-4o": {
      name: "OpenAI GPT-4 Optimized",
      temperature: 0.7,
      maxTokens: 8192,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      inputTokenCost: 0.000005,
      outputTokenCost: 0.000015,
      isTemplate: true,
    },
    "gpt-4o-mini": {
      name: "OpenAI GPT-4 Mini",
      temperature: 0.7,
      maxTokens: 4096,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      inputTokenCost: 0.00000015,
      outputTokenCost: 0.0000006,
      isTemplate: true,
    },
    "gpt-4-turbo": {
      name: "OpenAI GPT-4",
      temperature: 0.7,
      maxTokens: 8192,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      inputTokenCost: 0.00001,
      outputTokenCost: 0.00003,
      isTemplate: true,
    },
    "gpt-4o-2024-08-06": {
      name: "GPT-4 Optimized (2024-08-06)",
      inputTokenCost: 0.0000025,
      outputTokenCost: 0.00001,
      isTemplate: false,
    },
    "gpt-3.5-turbo-0125": {
      inputTokenCost: 0.0000005,
      outputTokenCost: 0.0000015,
      isTemplate: false,
    },
    "chatgpt-4o-latest": {
      inputTokenCost: 0.000005,
      outputTokenCost: 0.000015,
      isTemplate: false,
    },
    "gpt-4-turbo-2024-04-09": {
      inputTokenCost: 0.00001,
      outputTokenCost: 0.00003,
      isTemplate: false,
    },
    "gpt-4": {
      inputTokenCost: 0.00003,
      outputTokenCost: 0.00006,
      isTemplate: false,
    },
    "gpt-4-32k": {
      inputTokenCost: 0.00006,
      outputTokenCost: 0.00012,
      isTemplate: false,
    },
    "gpt-4-0125-preview": {
      inputTokenCost: 0.00001,
      outputTokenCost: 0.00003,
      isTemplate: false,
    },
    "gpt-4-1106-preview": {
      inputTokenCost: 0.00001,
      outputTokenCost: 0.00003,
      isTemplate: false,
    },
    "gpt-4-vision-preview": {
      inputTokenCost: 0.00001,
      outputTokenCost: 0.00003,
      isTemplate: false,
    },
    "gpt-3.5-turbo-instruct": {
      inputTokenCost: 0.0000015,
      outputTokenCost: 0.000002,
      isTemplate: false,
    },
    "gpt-3.5-turbo-1106": {
      inputTokenCost: 0.000001,
      outputTokenCost: 0.000002,
      isTemplate: false,
    },
    "gpt-3.5-turbo-0613": {
      inputTokenCost: 0.0000015,
      outputTokenCost: 0.000002,
      isTemplate: false,
    },
    "gpt-3.5-turbo-16k-0613": {
      inputTokenCost: 0.000003,
      outputTokenCost: 0.000004,
      isTemplate: false,
    },
    "gpt-3.5-turbo-0301": {
      inputTokenCost: 0.0000015,
      outputTokenCost: 0.000002,
      isTemplate: false,
    },
    "davinci-002": {
      inputTokenCost: 0.000002,
      outputTokenCost: 0.000002,
      isTemplate: false,
    },
    "babbage-002": {
      inputTokenCost: 0.0000004,
      outputTokenCost: 0.0000004,
      isTemplate: false,
    },
  },
  anthropic: {
    "claude-3-5-sonnet-20240620": {
      name: "Anthropic Claude 3.5 Sonnet",
      temperature: 0.7,
      maxTokens: 200000,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      inputTokenCost: 0.000003,
      outputTokenCost: 0.000015,
      isTemplate: true,
    },
    "claude-3-opus-20240229": null,
    "claude-3-sonnet-20240229": null,
    "claude-3-haiku-20240307": null,
    "claude-3-5-sonnet": {
      inputTokenCost: 0.000003,
      outputTokenCost: 0.000015,
      isTemplate: false,
    },
    "claude-3-opus": {
      inputTokenCost: 0.000015,
      outputTokenCost: 0.000075,
      isTemplate: false,
    },
    "claude-3-haiku": {
      inputTokenCost: 0.00000025,
      outputTokenCost: 0.00000125,
      isTemplate: false,
    },
    "claude-2-1": {
      inputTokenCost: 0.000008,
      outputTokenCost: 0.000024,
      isTemplate: false,
    },
    "claude-2-0": {
      inputTokenCost: 0.000008,
      outputTokenCost: 0.000024,
      isTemplate: false,
    },
    "claude-instant": {
      inputTokenCost: 0.0000008,
      outputTokenCost: 0.0000024,
      isTemplate: false,
    },
  },
  cohere: {
    "command-r": null,
    "command-r-plus": null,
  },
  mistral: {
    "mistral-large-latest": {
      name: "Mistral Large",
      temperature: 0.7,
      maxTokens: 32768,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      inputTokenCost: 0,
      outputTokenCost: 0,
      isTemplate: true,
    },
    "mistral-medium-latest": null,
    "mistral-small-latest": null,
    "open-mistral-nemo": null,
    "open-mixtral-8x22b": null,
    "open-mixtral-8x7b": null,
    "open-mistral-7b": null,
  },
  groq: {
    "llama-3.1-70b-versatile": {
      name: "Groq LLaMA 3.1",
      temperature: 0.7,
      maxTokens: 32768,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      inputTokenCost: 0,
      outputTokenCost: 0,
      isTemplate: true,
    },
    "llama-3.1-405b-reasoning": null,
    "llama-3.1-8b-instant": null,
    "mixtral-8x7b-32768": null,
    "gemma2-9b-it": null,
  },
  ollama: {
    codegemma: null,
    "codegemma:2b": null,
    "codegemma:7b": null,
    codellama: null,
    "codellama:7b": null,
    "codellama:13b": null,
    "codellama:34b": null,
    "codellama:70b": null,
    "codellama:code": null,
    "codellama:python": null,
    "command-r": null,
    "command-r:35b": null,
    "command-r-plus": null,
    "command-r-plus:104b": null,
    "deepseek-coder-v2": null,
    "deepseek-coder-v2:16b": null,
    "deepseek-coder-v2:236b": null,
    falcon2: null,
    "falcon2:11b": null,
    gemma: null,
    "gemma:2b": null,
    "gemma:7b": null,
    gemma2: null,
    "gemma2:2b": null,
    "gemma2:9b": null,
    "gemma2:27b": null,
    llama2: null,
    "llama2:7b": null,
    "llama2:13b": null,
    "llama2:70b": null,
    llama3: null,
    "llama3:8b": null,
    "llama3:70b": null,
    "llama3-chatqa": null,
    "llama3-chatqa:8b": null,
    "llama3-chatqa:70b": null,
    "llama3-gradient": null,
    "llama3-gradient:8b": null,
    "llama3-gradient:70b": null,
    "llama3.1": null,
    "llama3.1:8b": null,
    "llama3.1:70b": null,
    "llama3.1:405b": null,
    llava: null,
    "llava:7b": null,
    "llava:13b": null,
    "llava:34b": null,
    "llava-llama3": null,
    "llava-llama3:8b": null,
    "llava-phi3": null,
    "llava-phi3:3.8b": null,
    mistral: null,
    "mistral:7b": null,
    "mistral-large": null,
    "mistral-large:123b": null,
    "mistral-nemo": null,
    "mistral-nemo:12b": null,
    mixtral: null,
    "mixtral:8x7b": null,
    "mixtral:8x22b": null,
    moondream: null,
    "moondream:1.8b": null,
    openhermes: null,
    "openhermes:v2.5": null,
    qwen: null,
    "qwen:7b": null,
    "qwen:14b": null,
    "qwen:32b": null,
    "qwen:72b": null,
    "qwen:110b": null,
    qwen2: null,
    "qwen2:0.5b": null,
    "qwen2:1.5b": null,
    "qwen2:7b": null,
    "qwen2:72b": null,
    phi3: null,
    "phi3:3.8b": null,
    "phi3:14b": null,
  },
  other: {
    other: null,
  },
});
