import { rest } from "msw";
import testPurposesFixture from "../../shared/services/api/mocks/fixtures/testPurposesFixture.json";

export const URL = `*/api/testEndpoint`;

export const testPurposesHandler = (
  fixture?: Record<string, string | number>,
  status?: number,
  delay?: number
) =>
  rest.get(URL, (req, res, ctx) =>
    res(
      ctx.delay(delay),
      ctx.status(status || 200, "Mocked status"),
      ctx.json(fixture || testPurposesFixture)
    )
  );
